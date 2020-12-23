import {
  Button,
  Grid,
  TextField,
  Toolbar,
  AppBar,
  Typography,
  Container
} from "@material-ui/core";
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import cdf from "cumulative-distribution-function";
import pdf from "distributions-uniform-pdf";
import bellcurve from "highcharts/modules/histogram-bellcurve";
bellcurve(Highcharts);

function App() {
  const [values, setValues] = React.useState([]);
  const [showValues, setShowValues] = React.useState(false);
  const handleValueChane = (e) => {
    setValues(e.target.value.split(" ").sort());
  };

  const getF = () => {
    const significance = 0.5;
    const valuesList = values.map((_, index) => {
      return (index + 1 - significance) / values.length;
    });
    return valuesList;
  };

  const getX = () => {
    const valuesList = values.map((value, index) => {
      return Math.log(value);
    });
    return valuesList;
  };

  const getY = () => {
    const fValues = getF();
    //console.log("f verileri:", fValues);
    const valuesList = values.map((value, index) => {
      //console.log("index item:", fValues[index]);
      return Math.log(Math.log(1 / (1 - fValues[index])));
    });
    return valuesList;
  };
  console.log(pdf(values), values);
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Strength Analysis for Advanced Ceramics
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={12}>
          <Grid item xs={6}>
            <TextField
              onChange={handleValueChane}
              placeholder="Strength numbers"
            />
          </Grid>
          <Grid>
            <Button onClick={() => setShowValues(!showValues)}>
              {" "}
              Show Datas{" "}
            </Button>
            <Button onClick={() => setShowValues(!showValues)}>
              {" "}
              Upload file{" "}
            </Button>
          </Grid>
        </Grid>
        {showValues && (
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <h3>Strength [MPa]</h3>
              <ul>
                {values.map((value) => {
                  return <li>{value}</li>;
                })}
              </ul>
            </Grid>
            <Grid item xs={3}>
              <h3>F Values</h3>
              <ul>
                {getF().map((value) => {
                  return <li>{value}</li>;
                })}
              </ul>
            </Grid>
            <Grid item xs={3}>
              <h3>X Values</h3>
              <ul>
                {getX().map((value) => {
                  return <li>{value}</li>;
                })}
              </ul>
            </Grid>
            <Grid item xs={3}>
              <h3>Y Values</h3>
              <ul>
                {getY().map((value) => {
                  return <li>{value}</li>;
                })}
              </ul>
            </Grid>
          </Grid>
        )}
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            chart: {
              type: "scatter",
              zoomType: "xy"
            },
            title: {
              text: "Weibull Distrubition Chart"
            },
            series: [
              {
                data: getX().map((x, index) => {
                  return [x, getY()[index]];
                })
              }
            ]
          }}
        />
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            title: {
              text: "Cumulative Distribution Function"
            },
            series: [
              {
                data: cdf(values).ps()
              }
            ]
          }}
        />
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            title: {
              text: "Probability Density Function"
            },
            series: [
              { type: "bellcurve", baseSeries: 1 },
              {
                type: "scatter",
                data: pdf(values.map(Number)),
                marker: {
                  radius: 5
                }
              }
            ]
          }}
        />
      </Container>
    </div>
  );
}

export default App;
