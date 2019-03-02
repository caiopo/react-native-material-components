yarn pack
cd example
yarn remove react-native-better-switch
mkdir _cache
yarn add ../react-native-better-switch-v*.tgz --cache-folder _cache
rm -r _cache
