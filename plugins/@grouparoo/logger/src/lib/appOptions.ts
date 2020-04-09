export async function appOptions() {
  return {
    stdout: {
      type: "list",
      options: ["true", "false"],
      descriptions: [
        "log the output to the console",
        "do not log to the console",
      ],
    },
  };
}
