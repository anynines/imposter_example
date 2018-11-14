# Imposter Example
This repo contains some examples for working with the Imposter framework in order to create mock server out of a swagger specification as well as some customized behaviour. 


# Prerequisites

* Docker installed
* `docker pull `
* `docker pull outofcoffee/imposter-rest`
* `docker pull outofcoffee/imposter-openapi`


# Simple Mock 

Simple mock based on swagger specification can be found under _/swagger-simple_

* Run mock server with `docker run -ti -p 8443:8443 -v $(pwd)/swagger-simple:/opt/imposter/config outofcoffee/imposter-openapi`
* Specification overview is added under `http://localhost:8443/_spec/`
* Endpoints of mocked server can be reached at `http://localhost:8443/<endpoint>`
* Try: `curl http://localhost:8443/pets`


# Custom Mock

Imposter allows make custom configuration for endpoint behaviour. Under _custom_ there are some examples. It is possible to give different response codes and data depending on the request. Method, the URI, query parameters and the body can be analyzed inside of either groovy or JavaScript files. 

* Run mock server with `docker run -ti -p 8443:8443 -v $(pwd)/custom:/opt/imposter/config outofcoffee/imposter-rest`
* Endpoints of mocked server can be reached at `http://localhost:8443/<endpoint>`, where `<endpoint>` equals the `path` in the respective config file
* Try: `curl http://localhost:8443/endpoint2\?action\=create -v`.


# References

* https://github.com/outofcoffee/imposter
* http://outofcoffee.viewdocs.io/imposter/