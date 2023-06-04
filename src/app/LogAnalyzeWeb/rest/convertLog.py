import argparse
from flask import jsonify

#REST向け
def request(args,rest=True):
    vRetJSON = {"converted":args["text"]}
    if rest == True:
        return jsonify(vRetJSON)

#コマンド向け
if __name__ == "__main__":
    argParser = argparse.ArgumentParser()
    argParser.add_argument("--text")
    vArgs = vars(argParser.parse_args())
    
    #関数実行
    request(vArgs,False)
