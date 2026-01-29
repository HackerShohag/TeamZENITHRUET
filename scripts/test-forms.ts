/**
 * Test script for Google Apps Script form endpoints
 * Run with: npx tsx scripts/test-forms.ts
 */

import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const JOIN_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_JOIN_URL;
const SUPPORT_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SUPPORT_URL;

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(color: string, ...args: any[]) {
  console.log(color, ...args, colors.reset);
}

async function testEndpoint(name: string, url: string | undefined, testData: object) {
  log(colors.cyan, `\n📋 Testing ${name}...`);
  
  if (!url) {
    log(colors.red, `❌ ${name} URL not configured in .env.local`);
    return false;
  }
  
  log(colors.blue, `   URL: ${url.substring(0, 60)}...`);
  
  try {
    // Test GET (health check)
    log(colors.yellow, '   → Testing GET (health check)...');
    const getResponse = await fetch(url);
    const getData = await getResponse.json();
    
    if (getData.status === 'ok') {
      log(colors.green, `   ✓ GET passed: ${JSON.stringify(getData)}`);
    } else {
      log(colors.yellow, `   ⚠ GET response: ${JSON.stringify(getData)}`);
    }
    
    // Test POST (form submission)
    log(colors.yellow, '   → Testing POST (form submission)...');
    
    const formBody = new URLSearchParams();
    formBody.append('data', JSON.stringify(testData));
    
    const postResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.toString(),
    });
    
    const postData = await postResponse.json();
    
    if (postData.status === 'success') {
      log(colors.green, `   ✓ POST passed: ${JSON.stringify(postData)}`);
      return true;
    } else {
      log(colors.red, `   ✗ POST failed: ${JSON.stringify(postData)}`);
      return false;
    }
    
  } catch (error: any) {
    log(colors.red, `   ✗ Error: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('\n' + '='.repeat(60));
  log(colors.cyan, '🧪 GOOGLE APPS SCRIPT ENDPOINT TESTER');
  console.log('='.repeat(60));
  
  // Test data
  const joinTestData = {
    name: 'Test User (DELETE ME)',
    email: 'test@example.com',
    phone: '01234567890',
    department: 'Computer Science & Engineering',
    year: '3rd Year',
    preferredTeam: 'Control Team',
    skills: 'Testing, Debugging',
    motivation: 'This is a test submission - please delete',
    portfolio: 'https://example.com',
    type: 'join',
    timestamp: new Date().toISOString(),
  };
  
  const supportTestData = {
    name: 'Test Supporter (DELETE ME)',
    email: 'test@example.com',
    phone: '01234567890',
    organization: 'Test Organization',
    website: 'https://example.com',
    supportType: 'other',
    message: 'This is a test submission - please delete',
    type: 'support',
    timestamp: new Date().toISOString(),
  };
  
  // Run tests
  const joinResult = await testEndpoint('JOIN FORM', JOIN_URL, joinTestData);
  const supportResult = await testEndpoint('SUPPORT FORM', SUPPORT_URL, supportTestData);
  
  // Summary
  console.log('\n' + '='.repeat(60));
  log(colors.cyan, '📊 SUMMARY');
  console.log('='.repeat(60));
  
  log(joinResult ? colors.green : colors.red, 
    `   Join Form:    ${joinResult ? '✓ WORKING' : '✗ FAILED'}`);
  log(supportResult ? colors.green : colors.red, 
    `   Support Form: ${supportResult ? '✓ WORKING' : '✗ FAILED'}`);
  
  if (joinResult && supportResult) {
    log(colors.green, '\n🎉 All tests passed! Check your Google Sheets and email.');
  } else {
    log(colors.yellow, '\n⚠️  Some tests failed. Check:');
    console.log('   1. URLs in .env.local are correct');
    console.log('   2. Scripts are deployed as "Web app" with "Anyone" access');
    console.log('   3. You created a NEW deployment after code changes');
  }
  
  console.log('\n' + '='.repeat(60) + '\n');
}

main();
