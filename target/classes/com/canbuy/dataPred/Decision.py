import numpy as np

data = np.genfromtxt('/Users/vibhu/Desktop/Challenge3_Transactions.csv', delimiter=',', dtype='str')

necessary_data = data[:,[3,5,6]]
np.random.shuffle(necessary_data)
ft = necessary_data[:,[1,2]]
ot = necessary_data[:,0]


from sklearn import tree


from sklearn import preprocessing
le = preprocessing.LabelEncoder()
le.fit(ft[:,1])
categories = le.transform(ft[:,1])

yle = preprocessing.LabelEncoder()
yle.fit(ot)
labels=yle.transform(ot)

amount = ft[:,0]

amount = amount.reshape((-1,1))
categories = categories.reshape((-1,1))
labels = labels.reshape((-1,1)) 
X = np.hstack((categories,amount))
Y = labels

X = X.astype(int)
Y = Y.astype(int)

X_train = X[0:int(0.8*X.shape[0]),:]
X_test = X[int(0.8*X.shape[0])+1:,:]

Y_train = Y[0:int(0.8*X.shape[0])]
Y_test = Y[int(0.8*X.shape[0])+1:]

clf = tree.DecisionTreeClassifier()
clf = clf.fit(X_train, Y_train)

from sklearn.metrics import accuracy_score
Y_pred = clf.predict(X_test)
print accuracy_score(Y_test,Y_pred)