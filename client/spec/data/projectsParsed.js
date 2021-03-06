const packagesResponse = require( "./packagesResponse" );
module.exports = {
	projects: {
		"core-blu": {
			owners: {
				BanditSoftware: {
					branches: {
						master: [
							"core-blu~BanditSoftware~master~67bd1695~0.1.5~11~linux~any~any~x64.tar.gz",
							"core-blu~BanditSoftware~master~e367b2e9~0.1.5~10~linux~any~any~x64.tar.gz"
						]
					}
				}
			}
		},
		"nonstop-index-ui": {
			owners: {
				"LeanKit-Labs": {
					branches: {
						master: [
							"nonstop-index-ui~LeanKit-Labs~master~da8b6aa4~0.1.0~10~linux~any~any~x64.tar.gz"
						]
					}
				}
			}
		}
	},
	packages: {
		"core-blu~BanditSoftware~master~67bd1695~0.1.5~11~linux~any~any~x64.tar.gz": packagesResponse.packages[ 0 ],
		"core-blu~BanditSoftware~master~e367b2e9~0.1.5~10~linux~any~any~x64.tar.gz": packagesResponse.packages[ 1 ],
		"nonstop-index-ui~LeanKit-Labs~master~da8b6aa4~0.1.0~10~linux~any~any~x64.tar.gz": packagesResponse.packages[ 2 ]
	}
};
