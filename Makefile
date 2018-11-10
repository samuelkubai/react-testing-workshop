start:
	@ cat README.md

# Run the submission file and get real time feedback
run:
	@ cp ${SUBMISSION_FILE} ./_test.js
	@ node ./_test.js
	@ rm -rf ./_test.js

verify:
