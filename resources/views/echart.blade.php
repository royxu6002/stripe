<!--
    THIS EXAMPLE WAS DOWNLOADED FROM https://echarts.apache.org/examples/en/editor.html?c=candlestick-sh
-->
<!DOCTYPE html>
<html style="height: 100%">
    <head>
        <meta charset="utf-8">
    </head>
    <body style="height: 100%; margin: 0">
    <div style="height: 100%" id="epos">

    </div>

        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>
        <!-- Uncomment this line if you want to dataTool extension
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts@5/dist/extension/dataTool.min.js"></script>
        -->
        <!-- Uncomment this line if you want to use gl extension
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts-gl@2/dist/echarts-gl.min.js"></script>
        -->
        <!-- Uncomment this line if you want to echarts-stat extension
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts-stat@latest/dist/ecStat.min.js"></script>
        -->
        <!-- Uncomment this line if you want to use map
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts@5/map/js/china.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts@5/map/js/world.js"></script>
        -->
        <!-- Uncomment these two lines if you want to use bmap extension
        <script type="text/javascript" src="https://api.map.baidu.com/api?v=2.0&ak=<Your Key Here>"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts@5/dist/extension/bmap.min.js"></script>
        -->

        <script type="text/javascript">
var dom = document.getElementById("epos");
var myChart = echarts.init(dom);
var app = {};

var option;



var upColor = '#ec0000';
var upBorderColor = '#8A0000';
var downColor = '#00da3c';
var downBorderColor = '#008F28';


// 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
var data0 = splitData([
    ['2020/12/25', 3.472,3.509,3.461,3.512],
    ['2020/12/28', 3.507,3.519,3.495,3.539],
    ['2020/12/29', 3.527,3.512,3.506,3.537],
    ['2020/12/30', 3.509,3.563,3.504,3.566],
    ['2020/12/31', 3.571,3.634,3.571,3.643],
    ['2021/01/04', 3.636,3.632,3.598,3.655],
    ['2021/01/05', 3.625,3.671,3.608,3.675],
    ['2021/01/06', 3.673,3.726,3.661,3.728],
    ['2021/01/07', 3.737,3.803,3.722,3.807],
    ['2021/01/08', 3.810,3.782,3.745,3.829],
    ['2021/01/11', 3.780,3.765,3.750,3.841],
    ['2021/01/12', 3.759,3.899,3.755,3.904],
    ['2021/01/13', 3.910,3.862,3.835,3.924],
    ['2021/01/14', 3.856,3.802,3.791,3.857],
    ['2021/01/15', 3.815,3.805,3.775,3.857],
    ['2021/01/18', 3.793,3.837,3.788,3.866],
    ['2021/01/19', 3.846,3.797,3.780,3.851],
    ['2021/01/20', 3.797,3.800,3.774,3.827],
    ['2021/01/21', 3.817,3.840,3.801,3.868],
    ['2021/01/22', 3.836,3.833,3.810,3.851],
    ['2021/01/25', 3.830,3.890,3.813,3.894],
    ['2021/01/26', 3.872,3.800,3.797,3.874],
    ['2021/01/27', 3.800,3.806,3.781,3.821],
    ['2021/01/28', 3.762,3.731,3.712,3.768],
    ['2021/01/29', 3.747,3.704,3.661,3.755],
    ['2021/02/01', 3.707,3.731,3.692,3.733],
    ['2021/02/02', 3.741,3.752,3.723,3.756],
    ['2021/02/03', 3.752,3.764,3.731,3.782],
    ['2021/02/04', 3.746,3.787,3.746,3.808],
    ['2021/02/05', 3.804,3.834,3.799,3.864],
    ['2021/02/08', 3.848,3.875,3.820,3.884],
    ['2021/02/09', 3.887,3.939,3.857,3.940],
    ['2021/02/10', 3.950,4.012,3.945,4.030],
    ['2021/02/18', 4.090,4.007,3.981,4.099],
    ['2021/02/19', 3.992,3.998,3.947,4.008],
    ['2021/02/22', 4.002,3.873,3.866,4.005],
    ['2021/02/23', 3.849,3.886,3.845,3.927],
    ['2021/02/24', 3.887,3.788,3.752,3.896],
    ['2021/02/25', 3.824,3.843,3.804,3.862],
    ['2021/02/26', 3.777,3.743,3.741,3.808],
    ['2021/03/01', 3.777,3.773,3.737,3.780],
    ['2021/03/02', 3.795,3.707,3.672,3.796],
    ['2021/03/03', 3.700,3.804,3.698,3.806],
    ['2021/03/04', 3.765,3.698,3.677,3.772],
    ['2021/03/05', 3.650,3.678,3.616,3.712],
    ['2021/03/08', 3.698,3.561,3.556,3.717],
    ['2021/03/09', 3.561,3.505,3.483,3.585],
    ['2021/03/10', 3.547,3.523,3.514,3.562],
    ['2021/03/11', 3.539,3.614,3.538,3.617],
    ['2021/03/12', 3.631,3.617,3.583,3.632],
    ['2021/03/15', 3.601,3.558,3.526,3.616],
    ['2021/03/16', 3.566,3.582,3.543,3.596],
    ['2021/03/17', 3.576,3.576,3.534,3.604],
    ['2021/03/18', 3.580,3.591,3.575,3.603],
    ['2021/03/19', 3.551,3.496,3.482,3.560],
    ['2021/03/22', 3.491,3.523,3.491,3.550]

]);


function splitData(rawData) {
    var categoryData = [];
    var values = []
    for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i])
    }
    return {
        categoryData: categoryData,
        values: values
    };
}

function calculateMA(dayCount) {
    var result = [];
    for (var i = 0, len = data0.values.length; i < len; i++) {
        if (i < dayCount) {
            result.push('-');
            continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
            sum += data0.values[i - j][1];
        }
        result.push(sum / dayCount);
    }
    return result;
}



option = {
    title: {
        text: '上证50ETF指数',
        left: 0
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '15%'
    },
    xAxis: {
        type: 'category',
        data: data0.categoryData,
        scale: true,
        boundaryGap: false,
        axisLine: {onZero: false},
        splitLine: {show: false},
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax'
    },
    yAxis: {
        scale: true,
        splitArea: {
            show: true
        }
    },
    dataZoom: [
        {
            type: 'inside',
            start: 50,
            end: 100
        },
        {
            show: true,
            type: 'slider',
            top: '90%',
            start: 50,
            end: 100
        }
    ],
    series: [
        {
            name: '日K',
            type: 'candlestick',
            data: data0.values,
            itemStyle: {
                color: upColor,
                color0: downColor,
                borderColor: upBorderColor,
                borderColor0: downBorderColor
            },
            markPoint: {
                label: {
                    normal: {
                        formatter: function (param) {
                            return param != null ? Math.round(param.value) : '';
                        }
                    }
                },
                data: [
                    {
                        name: 'XX标点',
                        coord: ['2013/5/31', 2300],
                        value: 2300,
                        itemStyle: {
                            color: 'rgb(41,60,85)'
                        }
                    },
                    {
                        name: 'highest value',
                        type: 'max',
                        valueDim: 'highest'
                    },
                    {
                        name: 'lowest value',
                        type: 'min',
                        valueDim: 'lowest'
                    },
                    {
                        name: 'average value on close',
                        type: 'average',
                        valueDim: 'close'
                    }
                ],
                tooltip: {
                    formatter: function (param) {
                        return param.name + '<br>' + (param.data.coord || '');
                    }
                }
            },
            markLine: {
                symbol: ['none', 'none'],
                data: [
                    [
                        {
                            name: 'from lowest to highest',
                            type: 'min',
                            valueDim: 'lowest',
                            symbol: 'circle',
                            symbolSize: 10,
                            label: {
                                show: false
                            },
                            emphasis: {
                                label: {
                                    show: false
                                }
                            }
                        },
                        {
                            type: 'max',
                            valueDim: 'highest',
                            symbol: 'circle',
                            symbolSize: 10,
                            label: {
                                show: false
                            },
                            emphasis: {
                                label: {
                                    show: false
                                }
                            }
                        }
                    ],
                    {
                        name: 'min line on close',
                        type: 'min',
                        valueDim: 'close'
                    },
                    {
                        name: 'max line on close',
                        type: 'max',
                        valueDim: 'close'
                    }
                ]
            }
        },
        {
            name: 'MA5',
            type: 'line',
            data: calculateMA(5),
            smooth: true,
            lineStyle: {
                opacity: 0.5
            }
        },
        {
            name: 'MA10',
            type: 'line',
            data: calculateMA(10),
            smooth: true,
            lineStyle: {
                opacity: 0.5
            }
        },
        {
            name: 'MA20',
            type: 'line',
            data: calculateMA(20),
            smooth: true,
            lineStyle: {
                opacity: 0.5
            }
        },
        {
            name: 'MA30',
            type: 'line',
            data: calculateMA(30),
            smooth: true,
            lineStyle: {
                opacity: 0.5
            }
        },

    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

        </script>
    </body>
</html>
    