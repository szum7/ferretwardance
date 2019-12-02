
INSERT INTO dbo.[LongTodo] ([Content], [IsActive]) VALUES (N'-Lelső' + CHAR(13) + '-Lmásodik' + CHAR(13) + '-Lharmedik', N'Y');
INSERT INTO dbo.[ShortTodo] ([Content], [IsActive]) VALUES (N'-Selső' + CHAR(13) + '-Smásodik' + CHAR(13) + '-Sharmedik', N'Y');
INSERT INTO dbo.[ArchiveTodo] ([Content], [IsActive]) VALUES (N'-Aelső' + CHAR(13) + '-Amásodik' + CHAR(13) + '-Aharmedik', N'Y');