# @grouparoo/files-local

A [Grouparoo](https://www.grouparoo.com) plugin that stores files on your local hard drive.

## Installation

In your Grouparoo project, run `grouparoo install @grouparoo/files-local`.

## Configuration

Set the environment variable `FILES_LOCAL_STORAGE` to set your storage folder (default: `<CWD>/files-${process.env.NODE_ENV}`). For example, `./files-development`
