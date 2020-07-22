import React from 'react'

class RelicList extends Component {
    render() {
        const { relicsList } = this.props
        return (
            <div class="block">
                {relicsList.map((e) => <Extraction key={e.Name} items={e}/>)}
            </div>
        );
    }
}


export default RelicList;