pragma solidity ^0.5.0;

import "../roles/JudgeRole.sol";

contract JudgeRoleMock is JudgeRole {
    constructor() public JudgeRole() {
        super._addJudge(msg.sender);
    }

    function addJudge(address account) public onlyJudge {
        super._addJudge(account);
    }

    function removeJudge(address account) public {
        _removeJudge(account);
    }

    function onlyJudgeMock() public view onlyJudge {
        // solhint-disable-previous-line no-empty-blocks
    }

    // Causes a compilation error if super._removeJudge is not internal
    function _removeJudge(address account) internal {
        super._removeJudge(account);
    }
}
