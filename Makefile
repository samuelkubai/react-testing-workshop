start:
	@ cat README.md

# Run the submission file and get real time feedback
run:
	@ cp ${SUBMISSION_FILE} ./_test.js
	@ yarn test
	@ rm -rf ./_test.js

verify:
