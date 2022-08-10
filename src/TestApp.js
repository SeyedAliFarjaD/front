
//#region map import
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5map from "@amcharts/amcharts5/map";
// import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
//#endregion

//#region map import
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
//#endregion
import React, { useLayoutEffect } from 'react';


function TestApp() {

  let a = 1;

  function getA() {

    return a;

  }

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  useLayoutEffect(() => {
    // let root = am5.Root.new("chartdiv");

    // root.current = root;

    // let chart = root.container.children.push(
    //   am5xy.XYChart.new(root, {})
    // );

    // let yAxis = chart.yAxes.push(
    //   am5xy.ValueAxis.new(root, {
    //     renderer: am5xy.AxisRendererY.new(root, {})
    //   })
    // );

    // let xAxis = chart.xAxes.push(
    //   am5xy.CategoryAxis.new(root, {
    //     renderer: am5xy.AxisRendererX.new(root, {}),
    //     categoryField: "category"
    //   })
    // );
    // xAxis.data.setAll([{
    //   category: "Research"
    // }, {
    //   category: "Marketing"
    // }, {
    //   category: "Sales"
    // }]);

    // let xAxis = chart.xAxes.push(
    //   am5xy.DateAxis.new(root, {
    //     renderer: am5xy.AxisRendererX.new(root, {}),
    //     baseInterval: {
    //       timeUnit: "day",
    //       count: 1
    //     }
    //   })
    // );


    // let series = chart.series.push(
    //   am5xy.ColumnSeries.new(root, {
    //     name: "Series",
    //     xAxis: xAxis,
    //     yAxis: yAxis,
    //     valueYField: "value",
    //     valueXField: "date"
    //   })
    // );

    // series.data.setAll([{
    //   category: "Research",
    //   value: 1000
    // }, {
    //   category: "Marketing",
    //   value: 1200
    // }, {
    //   category: "Sales",
    //   value: 850
    // }]);

    // let chart = root.container.children.push(
    //   am5map.MapChart.new(root, {
    //     projection: am5map.geoMercator()
    //   })
    // );

    // let chart = root.container.children.push(
    //   am5map.MapChart.new(root, {})
    // );

    // let chart = root.container.children.push(
    //   am5map.MapChart.new(root, {
    //     panX: "rotateX",
    //     projection: am5map.geoNaturalEarth1()
    //   })
    // );


    // Create polygon series
    // let polygonSeries = chart.series.push(
    //   am5map.MapPolygonSeries.new(root, {
    //     geoJSON: am5geodata_worldLow,
    //     exclude: ["AQ"]
    //   })
    // );


    // Create root and chart
    // let chart = root.container.children.push(
    //   am5map.MapChart.new(root, {
    //     panX: "rotateX",
    //     projection: am5map.geoNaturalEarth1()
    //   })
    // );


    // // Create polygon series
    // let polygonSeries = chart.series.push(
    //   am5map.MapPolygonSeries.new(root, {
    //     geoJSON: am5geodata_worldLow,
    //     exclude: ["AQ"]
    //   })
    // );

    // return () => {
    //   root.dispose();
    // };
  }, []);

  return (
    <div>
      {/* <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div> */}

      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          MuiAlert is a success message!
        </MuiAlert>
      </Snackbar>
      <MuiAlert elevation={6} variant="filled" severity="error">This is an error message!</MuiAlert>
      <MuiAlert elevation={6} variant="filled" severity="warning">This is a warning message!</MuiAlert>
      <MuiAlert elevation={6} variant="filled" severity="info">This is an information message!</MuiAlert>
      <MuiAlert elevation={6} variant="filled" severity="success">This is a success message!</MuiAlert>

    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    //   </header>
    // </div>
  );
}

export default TestApp;
