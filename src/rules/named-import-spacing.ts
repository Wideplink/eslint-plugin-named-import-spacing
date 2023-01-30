import { ESLintUtils, ASTUtils } from "@typescript-eslint/utils"

export const errorMessages = {
  missingSpace: "Missing space(s) before or/and after variable",
  unexpectedSpace: "Unexpected space(s) before or/and after variable"
} as const;

export default ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: "layout",
    fixable: "whitespace",
    schema: [
      {
        enum: [
          "always",
          "never",
        ]
      }
    ],
    messages: errorMessages,
  },
  defaultOptions: [
    "always"
  ],
  create(context){
    const sourceCode = context.getSourceCode();
    const requireSpace = !context.options[0] || context.options[0] === "always";
    return {
      ImportSpecifier: function(node){
        const prevToken = sourceCode.getTokenBefore(node);
        const nextToken = sourceCode.getTokenAfter(node);
        if(prevToken && nextToken && ASTUtils.isTokenOnSameLine(prevToken, node) && ASTUtils.isTokenOnSameLine(nextToken, node)){
          const beforeSpaceIsOk = 
            requireSpace 
              ? prevToken.value !== "{" || sourceCode.isSpaceBetween(prevToken, node)
              : prevToken.value !== "{" || !sourceCode.isSpaceBetween(prevToken, node)
          ;
          const afterSpaceIsOk =
            requireSpace
              ? nextToken.value !== "}" || sourceCode.isSpaceBetween(node, nextToken)
              : nextToken.value !== "}" || !sourceCode.isSpaceBetween(node, nextToken)
          ;
          /*
            before
              if 'always'
                => previous token is NOT '{' or there's correctly space.
              if 'never'
                => previous token is NOT '{' or there's no space.
            after
              if 'always'
                => next token is NOT '}' or there's correctly space.
              if 'never'
                => next token is NOT '}' or there's no space.
           */
          if(!beforeSpaceIsOk || !afterSpaceIsOk){
            if(requireSpace){
              context.report({
                node,
                messageId: "missingSpace",
                fix(fixer){
                  return [
                    !beforeSpaceIsOk ? fixer.insertTextBefore(node, " ") : null,
                    !afterSpaceIsOk ? fixer.insertTextAfter(node, " ") : null,
                  ].filter(r => r);
                },
              });
            }else{
              context.report({
                node,
                messageId: "unexpectedSpace",
                fix(fixer){
                  return [
                    !beforeSpaceIsOk ? fixer.removeRange([
                      prevToken.range[1],
                      node.range[0],
                    ]) : null,
                    !afterSpaceIsOk ? fixer.removeRange([
                      node.range[1],
                      nextToken.range[0],
                    ]) : null,
                  ].filter(r => r);
                },
              })
            }
          }
        }
      }
    }
  },
});
