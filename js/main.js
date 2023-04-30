import { Table } from "./utils.js";
import { andi } from "../Object/object1.js";
import { emailAndi } from "../Object/object1.js";
import { zidni } from "../Object/object2.js";
new Table({
    columns: ['Name', 'Email'],
    data: [
      ['John', 'john@example.com'],
      ['Mike', 'mike@gmail.com'],
      [andi, emailAndi],
      [zidni.nama, zidni.email]
    ],
  }).render(document.getElementById('table'));