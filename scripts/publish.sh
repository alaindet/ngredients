VERSION=$1
PREFIX="NGREDIENTS"

# Pre steps
# =========
# Merge PR into develop
# Update CHANGELOG.md

# Post steps
# ==========
# Add a release on GitHub (TODO: Via Release API)

cd ../ngredients/projects/ngredients # Project
npm version $VERSION --allow-same-version
echo "$PREFIX: Updated package.json to version $VERSION"
cd ../../ # Root
git add .
git commit -m "Upgrade to $VERSION"
git push
echo "$PREFIX: Committed to development branch"
rm -rf node_modules
echo "Removed node_modules"
rm -rf dist
echo "$PREFIX: Remove previous build"
ng build ngredients --prod
echo "$PREFIX: Fresh build done"
cd ./dist/ngredients # Dist
npm pack
echo "$PREFIX: Tarball packed"
npm publish
echo "$PREFIX: Published on NPM"
cd ../../ # Root
git checkout main
git merge development
git push
echo "$PREFIX: Merged into main branch"
git tag "ngredients@$VERSION"
git push origin --tags
echo "$PREFIX: Added tag for version$VERSION"
echo "$PREFIX: Done!"
