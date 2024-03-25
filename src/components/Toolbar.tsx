import React from 'react';
import { CardData } from '../data/CardData';
import './style/toolbar.css';

interface ToolbarProps {
    isDealt: boolean;
    shuffle: () => void;
    deal: () => void;
    reset: () => void;
}

interface ToolbarState {
    dealt: boolean;
}

export default class Toolbar extends React.Component<ToolbarProps, ToolbarState> {
    constructor(props: ToolbarProps){
        super(props);
    }
    
    render() {
        return (
            <div id='toolbar'>
                <div className='toolbarButton' onClick={this.props.shuffle}>Shuffle</div>
                <div className='toolbarButton' onClick={this.props.deal}>Deal</div>
                <div className='toolbarButton' onClick={this.props.reset}>Reset</div>
            </div>
        );
    }
}