<!-- Links in /docs/documentation should NOT have `.md` at the end, because they end up in our wiki at release. -->

# ng update

## Overview
`ng update [name]` updates, initializes, or re-initializes, an angular application.

Initialization is done in-place, meaning that the generated application is initialized in the current directory.

## Options
`--dry-run` (`-d`) run through without making any changes

`--skip-install` (`-si`) skip installing packages

`--skip-git` (`-sg`) skip initializing a git repository

`--directory` (`-dir`) the directory name to create the app in

`--source-dir` (`-sd`) the name of the source directory

`--style` the style file default extension

`--prefix` (`p`) the prefix to use for all component selectors

`--routing` flag to indicate whether to generate a routing module

`--inline-style` (`is`) flag to indicate if the app component should have an inline style

`--inline-template` (`it`) flag to indicate if the app component should have an inline template