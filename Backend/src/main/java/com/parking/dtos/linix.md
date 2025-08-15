1. File & Directory Management

ls                # List files and folders
ls -l             # Long listing with permissions
cd /path/to/dir   # Change directory
pwd               # Print working directory
mkdir mydir       # Create new directory
rmdir mydir       # Remove empty directory
rm -r mydir       # Remove directory and contents
touch file.txt    # Create empty file
rm file.txt       # Delete a file
mv a.txt b.txt    # Rename or move file
cp a.txt b.txt    # Copy file


 2.File Viewing & Editing
cat file.txt       # View file contents
more file.txt      # View file page-by-page
less file.txt      # Scrollable viewer
head -n 10 file    # First 10 lines
tail -n 10 file    # Last 10 lines
nano file.txt      # Simple terminal editor
vim file.txt       # Advanced terminal editor

 3. Searching & Finding
 find . -name "*.txt"          # Find .txt files
grep "text" file.txt          # Search for text in a file
grep -r "main" /project/dir   # Recursive search



4. User & Permissions

whoami             # Show current user
id                 # Show UID, GID, groups
chmod 755 file.sh  # Change permissions
chown user:group file.txt  # Change ownership








5. File Compression & Archiving
tar -cvf archive.tar file/dir     # Create .tar archive
tar -xvf archive.tar              # Extract .tar archive
gzip file.txt                     # Compress a file
gunzip file.txt.gz                # Decompress


10. Bonus: Useful Utilities
history                       # Show command history
clear                         # Clear terminal
man ls                        # Manual/help for command
date                          # Show current date & time
cal                           # Show calendar
