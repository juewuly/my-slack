import React, { Component } from 'react';
import SidebarPane from './SidebarPane';
// import ChatPane from './ChatPane';
// import EmptyChatPane from './EmptyChatPane';
import { channels, people, createFakeActivity } from './static-data';


function nextId(messages) {
    return messages.length ? messages[messages.length -1].id + 1 : 0;
}

function createMessage(text, messageId) {
    return {
        id: messageId,
        userName: 'Myself',
        text: text,
        timestamp: new Date()
    };
}

export default class Root extends Component {
    state = {
        channels,
        people,
        messagesByChannelId: createFakeActivity(channels, 15),
        messagesByPersonId: createFakeActivity(people, 5),
        selectedChannelId: null,
        selectedPersonId: null
    };

    handleChannelSelected = (channelId) => {
        this.setState({
            selectedChannelId: channelId,
            selectedPersonId: null
        });
    }

    handlePersonSelected = (personId) => {
        this.setState({
            selectedPersonId: personId,
            selectedChannelId: null
        });
    }
}