#!/usr/bin/python3
"""Defines a File Manager CLI, that manipulates files"""
import cmd
import os


class FileManagerCLI(cmd.Cmd):
    intro = "Welcome to FileManagerCLI. Type 'help' for available commands"
    prompt = "FileManager:~$ "

    def __init__(self):
        """Initialise the FileManagerCLI class"""
        super().__init__()
        self.current_directory = os.getcwd()

    def do_list(self, line):
        """List file and directories in the current directory"""
        files_and_dirs = os.listdir(self.current_directory)
        for item in files_and_dirs:
            print(item)

    def do_change_dir(self, directory):
        """Change the current directory"""
        new_dir = os.path.join(self.current_directory, directory)
        if os.path.exists(new_dir) and os.path.isdir(new_dir):
            self.current_directory = new_dir
            print(f"Current directory changed to {self.current_directory}")
        else:
            print(f"Directory '{directory}' does not exist")

    def do_create_file(self, filename):
        """Create a new text file in the current directory"""
        file_path = os.path.join(self.current_directory, filename)
        try:
            with open(file_path, 'w') as new_file:
                print(f"File '{filename}' created in {self.current_directory}")
        except Exception as e:
            print('Error: {}'.format(e))

    def do_read_file(self, filename):
        """Read the content of a text file in the current working directory"""
        file_path = os.path.join(self.current_directory, filename)
        try:
            with open(file_path, 'r') as existing_file:
                print(existing_file.read())
        except FileNotFoundError:
            print(f"File '{filename}' not found")
        except Exception as e:
            print(f"Error: {e}")

    def do_quit(self, line) -> bool:
        """Exit the CLI"""
        return True

    def postcmd(self, stop: bool, line: str) -> bool:
        """Print an empty like for better readability"""
        print()
        return stop


if __name__ == "__main__":
    FileManagerCLI().cmdloop()

