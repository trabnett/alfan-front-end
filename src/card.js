import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Dropdown from './dropdowns/dropdown'
import AreaChart from './chart'


class SimpleCard extends Component {
    constructor(props){
        super(props);
        this.state={
            width: '25em',
            expanded: false,
            color1: 'green',
            color2: 'red',
            counter: 0,
            show: true
        }
    }
    setColor = (color) => {
        let bump = this.state.counter + 1
        this.setState({color1: color, counter: bump})
    }
  render(){
    const styles = {
        card: {
          height: '23em',
          width: this.state.width,
          margin: '1em'
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
          textAlign: 'center'
        },
        pos: {
          marginBottom: 12,
        },
      }

    let title = `Card ${this.props.number}`
    let expand = () =>{
        this.state.expanded ? this.setState({width: '23em', expanded: false, chart: <div></div>}) : this.setState({width: '40em', expanded: true})
    }
    let remove = () => {
        this.state.show ? this.setState({show: false}) : this.setState({show: true})
    }
    if (!this.state.show){
        return null
    }
    let expanded = this.state.expanded
    let chart = <AreaChart key={this.props.number} setColor1={this.setColor} color1={this.state.color1} color2={this.state.color2} counter={this.state.counter}/>
    let content = <div style={{textAlign:'center'}}> Card Content</div>
    return (
        <div>
        <Card style={styles.card}>
              <CardHeader
                action={
                    <IconButton aria-label="Settings">
                        <Dropdown remove={remove} expand={expand}></Dropdown>
                    </IconButton>
                }
                title={title}
            />
          <CardContent>
            <Typography className={styles.title} color="textSecondary" gutterBottom>
                {expanded ? chart : content }
            </Typography>
          </CardContent>
        </Card>
        </div>
      );
  }

}
export default SimpleCard;