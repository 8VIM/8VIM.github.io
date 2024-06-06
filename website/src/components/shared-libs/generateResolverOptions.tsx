import LocalFileResolver from "@site/src/components/shared-libs/localFileResolver"

type Params = {
  basePath?: string
  jsonPointer?: string
  remote?: boolean
}

export default function generateResolverOptions(params: Params) {
  const { basePath, jsonPointer, remote } = params

  let config = {}

  if (basePath) {
    config["resolvers"] = {
      file: LocalFileResolver(basePath),
    }
  }

  if (jsonPointer) {
    config["jsonPointer"] = jsonPointer
  }

  return config
}