# angular-http-exposed

Why should just angular be able to use its cool features? Why can't we use its
powerful services like $http from outside?

Well, screw it, I just betrayed angular and exposed its http service, clean, plain
and available for anyone, in any browser framework!

# Usage

Simple, `http` provider is available globally, so you can just call it straight,
like you would do in angular:

```
http({
  url: 'http://localhost:9001/api/foo'
}).success(function(data) {
  document.write(JSON.stringify(data, null, 2));
});
```

```
http.get('http://localhost:9001/api/foo').success(function(data) {
  document.write(JSON.stringify(data, null, 2));
});
```
