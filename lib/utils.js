import toCamelCase from 'to-camel-case';

export function mapComponentsToModule(app, components) {
  if (!components) return;
  components.forEach(function (component) {
    if (!component) return;
    return app.component(toCamelCase(component.selector), component);
  });
  return app;
}

export function mapDirectivesToModule(app, directives) {
  if (!directives) return;
  directives.forEach(function (directive) {
    if (!directive) return;
    return app.directive(toCamelCase(directive.selector), directive.render);
  });
  return app;
}

export function mapPipesToModule(app, pipes) {
  if (!pipes) return;
  pipes.forEach(function (pipe) {
    if (!pipe) return;
    return app.filter(pipe.name, pipe.transform);
  });
  return app;
}

export function mapServicesToModule(app, services) {
  if (!services) return;
  services.forEach(function (service) {
    if (!service) return;
    return app.service(service.name, service.classFn);
  });
  return app;
}

export default function (app, config) {
  mapComponentsToModule(app, config.components);
  mapDirectivesToModule(app, config.directives);
  mapPipesToModule(app, config.pipes);
  mapServicesToModule(app, config.providers);
  return app;
}
