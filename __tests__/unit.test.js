// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('is 123-456-7890 a phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('is 0 a phone number', () => {
  expect(isPhoneNumber('0')).toBe(false);
});

test('is 555-5555 a phone number', () => {
  expect(isPhoneNumber('555-5555')).toBe(true);
});

test('is horse a phone number', () => {
  expect(isPhoneNumber('horse')).toBe(false);
});

test('is jaouyang@ucsd.edu an email', () => {
  expect(isEmail('jaouyang@ucsd.edu')).toBe(true);
});

test('is jaouyang an email', () => {
  expect(isEmail('jaouyang')).toBe(false);
});

test('is bob@bobmail.bob an email', () => {
  expect(isEmail('bob@bobmail.bob')).toBe(true);
});

test('is bob@bobmail an email', () => {
  expect(isEmail('bob@bobmail')).toBe(false);
});

test('is aekMeap a strong password', () => {
  expect(isStrongPassword('aekMeap')).toBe(true);
});

test('is mwJHWKns a strong password', () => {
  expect(isStrongPassword('mwJHWKns')).toBe(true);
});

test('is a a strong password', () => {
  expect(isStrongPassword('a')).toBe(false);
});

test('is abcdefghijklmnopqrstuvwxyz a strong password', () => {
  expect(isStrongPassword('abcdefghijklmnopqrstuvwxyz')).toBe(false);
});

test('is 10/31/2024 a date', () => {
  expect(isDate('10/31/2024')).toBe(true);
});

test('is 1/3/2023 a date', () => {
  expect(isDate('1/3/2023')).toBe(true);
});

test('is horse a date', () => {
  expect(isDate('horse')).toBe(false);
});

test('is 1/3/23 a date', () => {
  expect(isDate('1/3/23')).toBe(false);
});

test('is #FFFFFF a hex color', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('is #696 a hex color', () => {
  expect(isHexColor('#696')).toBe(true);
});

test('is 696 a hex color', () => {
  expect(isHexColor('#6969696')).toBe(false);
});

test('is #HORSES a hex color', () => {
  expect(isHexColor('#HORSES')).toBe(false);
});



