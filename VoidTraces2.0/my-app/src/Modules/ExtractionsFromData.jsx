import React from 'react';

class Extraction extends React.Component {

    render() {
        const { Tier, Name } = this.props.items
        return (
            <div class="box">
                <img src={`../images/${Tier}.png`} />
                <div class="boxItems">
                 <h5>{ Tier } { Name } Relic</h5>
                </div>
            </div>
         );
    }
}

export default Extraction;