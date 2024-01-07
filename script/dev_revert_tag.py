#!/usr/bin/env python3

# Python Standard Library
import os
import subprocess

# get path to this file's directory, then go one directory up
file_path = os.path.abspath(os.path.dirname(__file__))
base_path = os.path.abspath(os.path.dirname(file_path))
version_file_path = os.path.join(file_path, "version.txt")

# open version file
with open(version_file_path) as file:
    version_file = file.readlines()

# set version and version_info to None, so if we didn't find
# a version in version_txt, we can throw an error
version = None

# find version
for line in version_file:
    if "version: " in line:
        # find tuple inside version_txt and reformat it to
        # standard x.y.z version format
        tuple_left = line.index("(")
        tuple_right = line.index(")")
        version = line[tuple_left + 1:tuple_right].replace(",", ".").replace(" ", "")

# throe error if version not found
if not version:
    raise ValueError("ERROR: version not found at version_txt.")

# remove tag in local and remote repository
subprocess.call(f"git tag --delete \"v{version}\"", shell=True)
subprocess.call(f"git push --delete origin \"v{version}\"", shell=True)
subprocess.call(f"git push --delete github \"v{version}\"", shell=True)

# revert last commit
subprocess.call(f"git revert HEAD", shell=True)
