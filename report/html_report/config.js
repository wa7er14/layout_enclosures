report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Entire_document.png",
        "test": "..\\bitmaps_test\\20200422-140553\\Entire_document.png",
        "selector": "document",
        "fileName": "Entire_document.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/enclosures/",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "1.09",
          "analysisTime": 53
        },
        "diffImage": "..\\bitmaps_test\\20200422-140553\\failed_diff_Entire_document.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Single_block_with_id_qa-block.png",
        "test": "..\\bitmaps_test\\20200422-140553\\Single_block_with_id_qa-block.png",
        "selector": "#qa-block",
        "fileName": "Single_block_with_id_qa-block.png",
        "label": "Single block with id_qa-block\"",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/enclosures/",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "4.71",
          "analysisTime": 16
        },
        "diffImage": "..\\bitmaps_test\\20200422-140553\\failed_diff_Single_block_with_id_qa-block.png"
      },
      "status": "fail"
    }
  ]
});