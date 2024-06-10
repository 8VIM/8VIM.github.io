# Release

## Warning

Due to the nature of F-droid, stable versions can take up to 72h to
be available, and in the worst case a week.

```mermaid
graph TD
    close_milestone[Close project milestone related to the version]
    manual([Manual trigger]) --> update_version

    update_version --> next_version
    update_version --> release
    next_version --> release
    update_version --> fdroid
    release --> close_milestone
    update_version --> close_milestone
    close_milestone --> released([Released])

    subgraph update_version[Create the whatsnew file]
        whatsnew_push[Push changes]
        current_version[/Version without RC/]
        create_file[Create new whatsnew file]
        whatsnew_pull([Pull repo]) --> current_version
        whatsnew[/Changelog for the stores/] --> create_file
        current_version --> create_file
        create_file --> whatsnew_push([Push changes])
    end

    subgraph next_version[Update the repo for the next version]
        next_version_pull([Pull repo])
        bump[Bump version]
        next_version_pull --> bump
        version[/"Type of the next version. Either: major, minor (default) or patch"/] --> bump
        bump --> next_version_push([Push next version and tag])
    end

    subgraph release[Release]
        build[Build release APK] --> playstore[Release to Google playstore]
        build --> github_release[Create github release]
        cleanup([Remove the artifacts])
        github_release --> cleanup
        build --> cleanup
        playstore --> cleanup
    end

    subgraph fdroid[F-droid release]
        fdroid_pull([Pull website repo]) -- Use the latest app version/code --> promote_fdroid["`Update *version.json* file`"]
        promote_fdroid --> fdroid_push([Push changes])
    end
```
