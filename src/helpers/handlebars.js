const Handlebars = require("handlebars");

module.exports = {
  sum: (a, b) => a + b,
  sortable: (field, sort) => {
    const sortType = field === sort.column ? sort.type : "default";

    const icons = {
      default: "default",
      asc: "asc",
      desc: "desc",
    };

    const types = {
      default: "desc",
      asc: "desc",
      desc: "asc",
    };

    const icon = icons[sort.type];
    const type = types[sort.type];
    const address = Handlebars.escapeExpression(
      `?_sort&column=${field}&type=${type}`
    );
    const output = `<a href="${address}"><span>${icon}</span></a>`;
    return new Handlebars.SafeString(output);
  },
};
