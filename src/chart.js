import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";
import { whileStatement } from '@babel/types';
import ColorMenu from './dropdowns/color_dropdown'

class AreaChart extends React.Component {
      
    constructor(props) {
      super(props);

      this.state = {
        options: {
          dataLabels: {
            enabled: false
          },
          colors: [this.props.color1, this.props.color2],
          stroke: {
            curve: 'smooth'
          },

          Yaxis: {
              type: 'color',
          },
          xaxis: {
            type: 'number',
            categories: [5,10,15
            ],
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          }
        },
        series: [{
          name: 'First',
          data: [2650, 2800, 2000],
        }, {
          name: 'Second',
          data: [2300, 3100, 1700]
        }],
      }
    }
    setColor = (id, color) => {
        let newState = {...this.state.options}
        newState.colors[id - 1] = color
        this.setState({options: newState}, () => {
            this.props.setColor1(color)})
    }
    render() {
      return (
        <div id="chart">
          <div className="chart-top">
            <div style={{backgroundColor: this.state.options.colors[0], display:'flex', justifyContent:'center'}} className="color-select"><ColorMenu className="dropdown" id={1} setColor={this.setColor} color={this.state.options.colors[0]}></ColorMenu></div>
            <div style={{backgroundColor: this.state.options.colors[1], display:'flex', justifyContent:'center'}} className="color-select"><ColorMenu className="dropdown" id={2} setColor={this.setColor} color={this.state.options.colors[1]}></ColorMenu></div>
          </div>
          <ReactApexChart key={this.props.counter} options={this.state.options} series={this.state.series} type="area" height="170" />
        </div>
      );
    }
  }

  export default AreaChart;