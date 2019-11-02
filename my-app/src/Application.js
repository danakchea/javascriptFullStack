import React,{Component} from 'react';
import HighScore from './HighScore';

class Application extends Component
{
    constructor(props){
        super(props);
        this.state = {
            count: 0, 
            overTen : false
        }
    }
    
    handleClicked = () => {
        this.setState({count: this.state.count+1});
    }

    resetCount = (e) => {
        this.setState({
            count: 0,
            overTen : false
        });
    }

    componentDidUpdate(props,state)
    {
        if(this.state.count > 10 && !this.state.overTen)
        {
            this.setState({overTen:true})
        }
    }

    render()
    {
        let {count} = this.state;
        return (
            <div>
                <div> 
                    <h1>You Click the button {count} times</h1>
                    <HighScore  
                        overTen = {this.state.overTen}
                        onReset={(e) => this.resetCount(e)}
                    />
                    <span>
                        <button onClick={() => this.handleClicked()}>Click Me</button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Application;