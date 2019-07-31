// The MIT License(MIT)

// Copyright(c) 2016 - 2019 zOS Global Limited

// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files(the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
//   distribute, sublicense, and / or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:

// The above copyright notice and this permission notice shall be included
//   in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
// CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
//   TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// Based on OpenZeppelin source code: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/test/access/roles/MinterRole.test.js

const {shouldBehaveLikeRole} = require("./Role.behavior");

const AttendeeRoleMock = artifacts.require("AttendeeRoleMock");

/**
 * @describe These tests validate the functionality of {AttendeeRole.sol} by using
 * a Mock inherited contract ({AttendeeRoleMock})
 * @dev Contracts that implement Roles.Role, use {shouldBehaveLikeRole} tests, which provide
 * a shared set of tests for Role contracts.
 * Tests coverage:
 * - Access controls and other integrity checks (modifiers): checks if contract reverts
 * when appropriate, as well as allows usage when sender has the right permission.
 * - Core functionality: checks the intended contract's core functionality, making sure it
 * performs what is expected (PS: due to the complexity in some scenarios, where the next test
 * depends on previous steps, and to keep each test independent, some tests duplicate codes to
 * execute the required steps needed to validate the expected functionality).
 * - Events: checks if contracts triggers the expected events
 */
contract("AttendeeRole", function([_, attendee, otherAttendee, ...otherAccounts]) {
  beforeEach(async function() {
    this.contract = await AttendeeRoleMock.new({from: attendee});
    await this.contract.addAttendee(otherAttendee, {from: attendee});
  });

  // Testes scenarios described here.
  shouldBehaveLikeRole(attendee, otherAttendee, otherAccounts, "Attendee");
});
