#!/usr/bin/env python3

# Python Standard Library
import os
import subprocess

package_name = "Kianic Jekyll Theme"

# get path to this file's directory, then go one directory up
file_path = os.path.abspath(os.path.dirname(__file__))
base_path = os.path.abspath(os.path.dirname(file_path))
version_file_path = os.path.join(file_path, "version.txt")

# open version file
with open(version_file_path) as file:
    version_file = file.readlines()

# set version and version_info to None, so if we didn't find
# a version in version.txt, we can throw an error
version = None
version_info = None

# find version
for line in version_file:
    if "version: " in line:
        # find tuple inside version.txt and reformat it to
        # standard x.y.z version format
        tuple_left = line.index("(")
        tuple_right = line.index(")")
        version = line[tuple_left + 1:tuple_right].replace(",", ".").replace(" ", "")
        # creat a list from x.y.z string which has [x, y, z]
        # notice that x, y , z must be converted to integer
        version_info = [int(number) for number in version.split(".")]

# throw error if version not found
if not version or not version_info:
    raise ValueError("ERROR: version not found at version.txt.")

print(f"This program will tag a new release of {package_name}\n"
      + "and it will push to gitlab and github.\n\n"
      + f"current version is {version}\n\n")

# read and convert to integer.
print("Version is in X.Y.Z form.\n"
      "X is version major, Y is version minor, Z is version minor.\n\n")
new_major = int(input("Enter version major number:\n"))
new_minor = int(input("Enter version minor  number:\n"))
new_patch = int(input("Enter version patch number:\n"))

new_version = ".".join(map(str, [new_major, new_minor, new_patch]))

# check version to be bigger than last version.
if new_version == version:
    raise ValueError("Version can't be same as current version!")

if new_major < version_info[0]:
    raise ValueError("Major version can't be less than current version!")
elif new_major > version_info[0]:
    pass
elif new_minor < version_info[1]:
    raise ValueError("Minor version can't be less than current version!")
elif new_minor > version_info[1]:
    pass
elif new_patch < version_info[2]:
    raise ValueError("Patch version can't be less than current version!")

# creat an empty list for new version.txt file
print("Writing new version. \n\n")

new_version_txt = list()

# write new version_info and in version.txt.
new_version_info = f"version: ({new_major}, " \
               f"{new_minor}, {new_patch})\n"

# read current version.txt, and update version
# then append to new_version_txt list.
with open(version_file_path, "r") as file:
    lines = file.readlines()
    for line in lines:
        if "version:" in line:
            new_version_txt.append(new_version_info)
        else:
            new_version_txt.append(line)

# write updated content from new_version_txt
# back into version.txt file
with open(version_file_path, "w+") as file:
    file.writelines(new_version_txt)

# do git commit and tag and push to upstreams
print("Commit and Tag and Push to upstream. \n\n")

subprocess.call(f"git commit {version_file_path} --sign --message \"version: {package_name} v{new_version}\"", shell=True)
subprocess.call(f"git tag --annotate --sign --message \"new {package_name} version {new_version}\" \"v{new_version}\"", shell=True)
subprocess.call(f"git push origin HEAD \"v{new_version}\"", shell=True)
subprocess.call(f"git push github HEAD \"v{new_version}\"", shell=True)
