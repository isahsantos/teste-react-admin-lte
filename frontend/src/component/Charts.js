import React, { Component } from 'react';
import { render } from 'react-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // To avoid unnecessary update keep all options in the state.
      chartOptions: {
        title: {
            text: 'Teste Chart'
        },
        xAxis: {
          categories: ['2017', '2018', '2019'],
        },
        series: [
          { data: [1, 2, 3] }
        ],
        plotOptions: {
          series: {
            point: {
              events: {
                mouseOver: this.setHoverData.bind(this)
              }
            }
          }
        }
      },
      hoverData: null
    };
  }

  setHoverData = (e) => {
    // The chart is not updated because `chartOptions` has not changed.
    this.setState({ hoverData: e.target.category })
  }

  updateSeries = () => {
    // The chart is updated only with new options.
    this.setState({
      chartOptions: {
        series: [
          { data: [Math.random() * 5, 2, 1]}
        ]
      }
    });
  }

  render() {
    const { chartOptions, hoverData } = this.state;

    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
      <h6>Hovering over {hoverData}</h6>
      <button onClick={this.updateSeries.bind(this)}>Update Series</button>
      </div>
    )
  }
}

render(<LineChart />, document.getElementById('root'));
export default LineChart;