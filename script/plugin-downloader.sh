#!/usr/bin/env bash

CURRDIR="${PWD}"
PLUGINDIR="${PWD%/*}/assets/plugins"
TEMPDIR="temp"

# Create a temporary directory.
mkdir --parents "${TEMPDIR}"

# Reset plugin directory.
rm --force --recursive "${PLUGINDIR}"
mkdir --parents "${PLUGINDIR}"

# First plugin: Kianic Flag Icons.
KFI_VERSION=$(curl --silent https://api.github.com/repos/azadeh-afzar/Kianic-Flag-Icons/releases/latest \
| grep "tag_name" \
| awk '{print "" substr($2, 2, length($2)-3)}')

# Create download link.
KFI_DOWNLOAD_LINK="https://github.com/azadeh-afzar/Kianic-Flag-Icons/archive/${KFI_VERSION}.tar.gz"

# Setup paths.
KFI_DIRECROTY="kiaflagcons"
KFI_TARGZ="kiaflagcons.tar.gz"
KFI_IN_TEMP="./${TEMPDIR}/Kianic-Flag-Icons-${KFI_VERSION:1}/${KFI_DIRECROTY}"

# Create directory for this plugin in plugins directory.
mkdir --parents "${PLUGINDIR}/${KFI_DIRECROTY}"

# Download and extract.
wget --retry-connrefused --waitretry=1 --read-timeout=20 --timeout=15 \
--tries 0 --no-dns-cache --output-document "${KFI_TARGZ}" "${KFI_DOWNLOAD_LINK}"

tar --extract --gzip --file "${KFI_TARGZ}" --directory "./${TEMPDIR}"

# Remove tar file.
rm "${KFI_TARGZ}"

# Copy from temporary directory to plugin directory.
rm --force --recursive "${PLUGINDIR}/${KFI_DIRECROTY:?}"
mv "${KFI_IN_TEMP}" "${PLUGINDIR}"

# Second plugin: Kianic Simple Icons.
KSI_VERSION=$(curl --silent https://api.github.com/repos/azadeh-afzar/Kianic-Simple-Icons/releases/latest \
| grep "tag_name" \
| awk '{print "" substr($2, 2, length($2)-3)}')

# Create download link.
KSI_DOWNLOAD_LINK="https://github.com/azadeh-afzar/Kianic-Simple-Icons/archive/${KSI_VERSION}.tar.gz"

# Setup paths.
KSI_DIRECROTY="kiasimcons"
KSI_TARGZ="kiasimcons.tar.gz"
KSI_IN_TEMP="./${TEMPDIR}/Kianic-Simple-Icons-${KSI_VERSION:1}/${KSI_DIRECROTY}"

# Create directory for this plugin in plugins directory.
mkdir --parents "${PLUGINDIR}/${KSI_DIRECROTY}"

# Download and extract.
wget --retry-connrefused --waitretry=1 --read-timeout=20 --timeout=15 \
--tries 0 --no-dns-cache --output-document "${KSI_TARGZ}" "${KSI_DOWNLOAD_LINK}"

tar --extract --gzip --file "${KSI_TARGZ}" --directory "./${TEMPDIR}"

# Remove tar file.
rm "${KSI_TARGZ}"

# Copy from temporary directory to plugin directory.
rm --force --recursive "${PLUGINDIR}/${KSI_DIRECROTY:?}"
mv "${KSI_IN_TEMP}" "${PLUGINDIR}"

# Delete temporary folder.
rm --force --recursive "${TEMPDIR}"
