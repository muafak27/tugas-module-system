export class Table {
    constructor({ columns, data }) {
      this.columns = columns;
      this.data = data;
    }
    render(element) {
      const header = this.columns.map((e) => `<th>${e}</th>`).join('');
      const rows = this.data.map((e) => `<tr>${e.map((t) => `<td>${t}</td>`).join('')}</tr>`).join('')
      element.innerHTML = `<table>
          <tr>
            ${header}
          </tr>
            ${rows}
        </table>`;
    }
  }