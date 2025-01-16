import fs from 'fs';
import path from 'path';

// Define the directory where ng-openapi-gen generates files
const dir = './src/app/services';

function updateExports(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
      const filePath = path.join(directory, file);
      if (fs.lstatSync(filePath).isDirectory()) {
        // Recursively update exports in subdirectories
        updateExports(filePath);
      } else if (file.endsWith('.ts')) {
        // Read the TypeScript file
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) throw err;

          const updatedData = data.replace(/export \{ ([\w, ]+) \} from/g, 'export type { $1 } from');

          // Write the updated content back to the file
          fs.writeFile(filePath, updatedData, 'utf8', err => {
            if (err) throw err;
            console.log(`Updated exports in: ${filePath}`);
          });
        });
      }
    });
  });
}
updateExports(dir);

