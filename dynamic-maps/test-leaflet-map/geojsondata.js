        // Example GeoJSON data
        var ex1 = {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-122.4194, 37.7749]
                    },
                    "properties": {
                        "name": "San Francisco"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [[
                            [-122.4231, 37.7785],
                            [-122.4161, 37.7765],
                            [-122.4111, 37.7805],
                            [-122.4161, 37.7835],
                            [-122.4231, 37.7785]
                        ]]
                    },
                    "properties": {
                        "name": "Sample Polygon"
                    }
                }
            ]
        };