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
}