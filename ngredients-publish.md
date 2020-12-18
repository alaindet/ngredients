- Move into `develop` branch
- Update version `./projects/ngredients/package.json`
- Update `./CHANGELOG.md`
- Run tests
- Run `git add . && git commit -m "Upgrade to VERSION"` and change version accordingly
- Run `ng build ngredients --prod`
- Try `npm whoami` to check if you're logged in
- If you're not logged in, run `npm login`
- Run `cd ./dist/ngredients && npm publish && cd ../../`
- Merge into `main` branch
- Optional (TODO: test)
  ```
  curl -X POST -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/alaindet/ngredients/releases -d '{"accept": "application/vnd.github.v3+json", "tag_name": "VERSION", "name": "VERSION", "draft": false, "prerelease": false}'
  ```
