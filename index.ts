const os = require("os");
const { exec } = require("child_process");

function executer(command, before, end) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(`Something went wrong!: ${error}`);
    }
    if (stderr) {
      console.log(`Error during process: ${stderr}`);
    }
    before();
    console.log(stdout);
    end();
  });
}
executer(
  "cat /etc/default/grub",
  () => console.log("before"),
  () => console.log("end")
);
