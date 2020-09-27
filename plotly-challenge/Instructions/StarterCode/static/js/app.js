function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      let metadata = data.metadata;
    });
};

let sample = data.sample;
let resultArray = sample.filter(sampleObj => sampleObj.id == sample);
let result = resultArray[0];

function buildCharts(sample) {
d3.json("samples.json").then((data) => {
    let samples = data.samples;
        let sample_values = samples.map(bd => bd.sample_values);
        let otu_ids = samples.map(bd => otu_ids);
        let otu_labels = sample.map(bd => otu_labels);
    })
    console.log(sample_values);
    console.log(otu_ids);
    console.log(otu_labels);
};

function updatePlotly() {
    
    let dropdownMenu = d3.select("#selDataset");
    
    let dataset = dropdownMenu.property("value");
  
    let x = [];
    let y = [];
  
    if (dataset === 'dataset1') {
      x = [1, 2, 3, 4, 5];
      y = [1, 2, 4, 8, 16];
    }
  
    if (dataset === 'dataset2') {
      x = [10, 20, 30, 40, 50];
      y = [1, 10, 100, 1000, 10000];
    }
  
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
  }
  
  init();
  