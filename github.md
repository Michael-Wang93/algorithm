- git的原理：项目跟目录下有一个子目录.git
- .git目录下有branches/
    config
    description
    HEAD
    hooks/
    info/
    objects/
    refs/
    这些子目录
- 文件的更改会在.git/objects下面多了一个子目录，目录名是哈希值的前2个字符，该子目录下面有一个文件，文件名是哈希值的后38个字符， 文件内容的一些二进制字符