# Lesson 03: Path & OS Modules

### Theory: Why do we need these?
* **Path Module: Windows uses backslashes (\) while POSIX (Mac/Linux) uses forward slashes (/). If you hardcode your paths, your app will crash on other systems. The path module handles this automatically.

* **OS Module: This allows your Node app to "talk" to the operating system to get info like free memory, CPU cores, or the current user's directory.