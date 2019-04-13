export const pollContractAbi = [{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pollId","type":"bytes32"},{"name":"pollHash","type":"string"}],"name":"registerPoll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"allowed","type":"bool"}],"name":"setPollRegisterAllowed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"allowed","type":"bool"}],"name":"setExternalVotesAllowed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"bytes32"},{"name":"pollId","type":"bytes32"},{"name":"result","type":"uint8[]"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isPollRegisterAllowed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isExternalVotesAllowed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_owner","type":"address"},{"name":"_externalVotesAllowed","type":"bool"},{"name":"_pollRegisterAllowed","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"voterToken","type":"bytes32"},{"indexed":true,"name":"pollId","type":"bytes32"},{"indexed":false,"name":"result","type":"uint8[]"}],"name":"Vote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"creator","type":"address"},{"indexed":true,"name":"pollId","type":"bytes32"},{"indexed":false,"name":"pollHash","type":"string"}],"name":"Poll","type":"event"}];
export const testNetPollContractAddress = '0x03779Fe782e2aca6111b55Fe7D4cd68076293441';