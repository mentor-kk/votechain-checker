import React, { Component } from 'react';
import { Input, Button, Textarea } from '@smooth-ui/core-sc'
import { thorify } from "thorify";
import { pollContractAbi, testNetPollContractAddress } from './contractData';
const Web3 = require("web3");
const web3 = thorify(new Web3(), "https://testnet.vote-chain.com");

class App extends Component {

  state = {
    pollIdHex: '',
    pollId: '',
    creator: '',
    voteHex: '',
    pollHash: '',
    pollQuestions: ''
  }

  render() {
    return (
      <div style={{ padding: 40, display: 'flex', flexDirection: 'column' }}>
          <Input valid size="md" placeholder="POLL ID (hex)" style={{ margin: 8, border: '1px solid #bd4932' }} onChange={(e) => this.updateStateField(e, 'pollIdHex')} value={this.state.pollIdHex}/>
          <Button size="md" style={{ margin: 8 }} onClick={this.getPollData}>Get poll data</Button>
          <span>Poll hash</span><Input disabled size="md" placeholder="POLL HASH" style={{ margin: 8 }} value={this.state.pollHash}/>
          <span>Poll creator address</span><Input disabled size="md" placeholder="POLL CREATOR" style={{ margin: 8 }} value={this.state.creator}/>
          <span>Poll id</span><Input disabled size="md" placeholder="POLL ID" style={{ margin: 8 }} value={this.state.pollId}/>
          <div style={{ borderBottom: '1px solid #D3D3D3', margin: 8 }}></div>
          <Input size="md" disabled placeholder="POLL HASH" style={{ margin: 8 }} value={this.state.pollHash}/>
          <Button size="md" style={{ margin: 8 }} onClick={this.getPollQuestions}>Get poll questions</Button>
          <span>Poll questions</span><Textarea size="lg" disabled placeholder="POLL QUESTIONS" style={{ margin: 8, minHeight: 120 }} value={this.state.pollQuestions}/>
          <div style={{ borderBottom: '1px solid #D3D3D3', margin: 8 }}></div>
          <Input valid size="md" placeholder="VOTE RESULT (hex)" style={{ margin: 8, border: '1px solid #bd4932' }} onChange={(e) => this.updateStateField(e, 'voteHex')} value={this.state.voteHex}/>
          <Button size="md" style={{ margin: 8 }} onClick={this.getVoteResult}>Get vote results</Button>
          <span>Vote answers</span><Input disabled size="md" placeholder="VOTE ANSWERS" style={{ margin: 8 }} value={this.state.voteAnswers}/>
          <div style={{ borderBottom: '1px solid #D3D3D3', margin: 8 }}></div>
      </div>
    );
  }

  getPollData = () => {
    const pollContractWeb3 = new web3.eth.Contract(pollContractAbi, testNetPollContractAddress);
    pollContractWeb3.getPastEvents('Poll', { filter: { pollId: this.state.pollIdHex } })
      .then(results => {
        const { pollHash, pollId, creator} = results[0].returnValues;
        this.setState({
          pollHash,
          pollId: this.hexToString(pollId).trim(),
          creator: creator
        })
      });
  }

  getPollQuestions = () => {
    this.setState({
      pollQuestions: this.atou(this.state.pollHash)
    });
  }

  getVoteResult = () => {
    this.setState({
      voteAnswers: web3.eth.abi.decodeParameter('uint8[]', this.state.voteHex)
    })
  }

  updateStateField = (e, field) => {
    this.setState({
      [field]: e.target.value,
    });
  }

  stringToHex(str) {
    return web3.utils.fromAscii(str);
  }

  hexToString(hex) {
    try {
      const result = web3.utils.toAscii(hex);
      return result;
    } catch(e) {}
  }

  utoa(str) {
    try {
      const result = window.btoa(unescape(encodeURIComponent(str)));
      return result;
    } catch(e) {}
  }

  atou(str) {
    try {
      const result = decodeURIComponent(escape(window.atob(str)));
      return result;
    } catch(e) {}
  }

}

export default App;
