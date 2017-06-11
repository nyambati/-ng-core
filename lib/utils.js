import toCamelCase from 'to-camel-case';

export const mapComponentsToModule = (app, components) => {
  if (!components) return;
  components.forEach(component => {
    if (!component) return;
    return app.component(toCamelCase(component.selector), component);
  });

  return app;
};

export const mapDirectivesToModule = (app, directives) => {
  if (!directives) return;
  directives.forEach(directive => {
    if (!directive) return;
    return app.directive(toCamelCase(directive.selector), directive.render);
  });
  return app;
};

export const mapPipesToModule = (app, pipes) => {
  if (!pipes) return;
  pipes.forEach(pipe => {
    if (!pipe) return;
    return app.filter(pipe.name, pipe.transform);
  });
  return app;
};

export const mapServicesToModule = (app, services) => {
  if (!services) return;
  services.forEach(service => {
    if (!service) return;
    return app.service(service.name, service.classFn);
  });
  return app;
};

export default (app, config) => {
  mapComponentsToModule(app, config.components);
  mapDirectivesToModule(app, config.directives);
  mapPipesToModule(app, config.pipes);
  mapServicesToModule(app, config.providers);
  return app;
};
